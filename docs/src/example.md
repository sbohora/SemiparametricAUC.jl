
Please follow this link to R package site [sAUC in R (sAUC)](https://sbohora.github.io/sAUC/)

### Perform AUC analyses with discrete covariates and a semi-parametric estimation

### Installation

```r
devtools::install_github("sbohora/sAUC")
```

### Example

To illustrate how to apply the proposed method, we obtained data from a randomized and controlled clinical trial, which was designed to increase knowledge and awareness to prevent Fetal Alcohol Spectrum Disorders (FASD) in children through the development of printed materials targeting women of childbearing age in Russia. One of the study objectives was to evaluate effects of FASD education brochures with different types of information and visual images on FASD related knowledge, attitudes, and alcohol consumption on childbearing-aged women. The study was conducted in two regions in Russia including St. Petersburg (SPB) and the Nizhny Novgorod Region (NNR) from 2005 to 2008. A total of 458 women were recruited from women's clinics and were randomly assigned to one of three groups (defined by the GROUP variable): (1) a printed FASD prevention brochure with positive images and information stated in a positive way, positive group (PG), (2) a FASD education brochure with negative messages and vivid images, negative group (NG); and (3) a general health material, control group (CG). For the purpose of the analysis in this thesis, only women in the PG and CG were included. Data were obtained from the study principal investigators . The response variable was the change in the number of drinks per day (CHANGE_DRINK=number of drinks after-number of drinks before) on average in the last 30 days from one-month follow-up to baseline. Two covariates considered for the proposed method were "In the last 30 days, have you smoked cigarettes?" (SMOKE) and  "In the last 30 days, did you take any other vitamins?" (OVITAMIN). Both covariates had "Yes" or "No" as the two levels. The question of interest here was to assess the joint predictive effects of SMOKE and OVITAMIN on whether the participants reduced the number of drinks per day from baseline to one month follow-up period. A total of 210 women with no missing data on any of the CHANGE_DRINK, SMOKE, GROUP, and OVITAMIN were included in the analysis.

The response variable CHANGE_DRINK was heavily skewed and not normally distributed in each group  (Shapiro-Wilk p<0.001). Therefore, we decided to use the AUG regression model to analyze the data.  In the AUG regression model we define

$$\large \pi = p(Y_{CG} > Y_{PG})$$ 

Note that the value of $\large \pi$ greater than .5 means that women in the PG had a greater reduction of alcohol drinks than those in the CG. For statistical results, all p-values < .05 were considered statistically significant and 95% CIs were presented.

We first fit an AUC regression model including both main effects of the covariates.  Note that the main effects of the covariates in fact represented their interactions with the GROUP variable, which is different than the linear or generalized linear model frame.  The reason is that the GROUP variable is involved in defining the AUC.  Tables below present the parameter estimates, SEs, p-values, and 95% CIs for model with one and two covariates.  Because parameter $\beta_2$ was not significantly different from 0, we dropped OVITAMIN and fit another model including only the SMOKE main effect.Table below shows a significant interaction between SMOKE and GROUP because the SMOKE was statistically significant (95% CI: (0.05, 1.47)). Therefore, the final model was 

$$logit(\hat{\pi}_{Smoke}) = \hat{\beta_0} + \hat{\beta_1}*I(Smoke =Yes).$$  


Because the interaction between SMOKE and GROUP was significant, we need to use AUC as a measure of the GROUP effect on CHANGE_DRINK for smokers and non-smokers separately using following formula for example for smokers;

$$\hat{\pi}_{Smoke} = \frac{e^{\hat{\beta_0} + \hat{\beta_1}*Smoke =Yes}}{1 + e^{\hat{\beta_0} + \hat{\beta_1}*Smoke =Yes}}$$
Specifically, the AUCs were 0.537 (insignificant) and 0.713 (significant) for non-smokers and smokers, respectively.  This implies that the effect of positive and control brochures were similar for nonsmokers; however, for smokers, the probability that the positive brochure had a better effect than the control brochure in terms of alcohol reduction is 71.30%, indicating the positive brochure is a better option than the control brochure.


### Result of sAUC Regression with one discrete covariate


```r
library(sAUC)
library(DT)
library(shiny)

fasd_label <- sAUC::fasd
names(fasd_label) <- c("y", "group", "vitamin", "smoke")
fasd_label[, c("smoke", "vitamin", "group")] <- lapply(fasd_label[, c("smoke", "vitamin", "group")], function(x) factor(x))

result_one <- sAUC::sAUC(formula = y ~ smoke, treatment_group = "group", data = fasd_label)
```

```
The model is:  logit [ p ( Y_1  >  Y_2 ) ]  =  beta_0 +  beta_1*smoke2 

Model Summary
```

```r
result_two <- sAUC::sAUC(formula = y ~ smoke + vitamin, treatment_group = "group", data = fasd_label)
```

```
The model is:  logit [ p ( Y_1  >  Y_2 ) ]  =  beta_0 +  beta_1*smoke2 + beta_2*vitamin2  

Model Summary
```

```r
result_one
```

```
$`Model summary`
            Coefficients Std. Error    2.5%   97.5% Pr(>|z|)
(Intercept)      -0.9099     0.3219 -1.5409 -0.2789   0.0047
smoke2            0.7668     0.3629  0.0555  1.4780   0.0346

$Coefficients
                  [,1]
(Intercept) -0.9099357
smoke2       0.7667856

$`AUC details`
     auchat    finvhat logitauchat v_finv_auchat var_logitauchat
1 0.2870130 -0.9099357  -0.9099357    0.10364630      0.10364630
2 0.4642734 -0.1431502  -0.1431502    0.02804169      0.02804169

$`Session information`
R version 3.4.2 (2017-09-28)
Platform: x86_64-w64-mingw32/x64 (64-bit)
Running under: Windows 7 x64 (build 7601) Service Pack 1

Matrix products: default

locale:
[1] LC_COLLATE=English_United States.1252 
[2] LC_CTYPE=English_United States.1252   
[3] LC_MONETARY=English_United States.1252
[4] LC_NUMERIC=C                          
[5] LC_TIME=English_United States.1252    

attached base packages:
[1] stats     graphics  grDevices utils     datasets  methods   base     

other attached packages:
[1] shiny_1.0.5  DT_0.2       sAUC_0.0.1.9

loaded via a namespace (and not attached):
 [1] Rcpp_0.12.13    digest_0.6.12   rprojroot_1.2   mime_0.5       
 [5] R6_2.2.2        xtable_1.8-2    backports_1.1.1 magrittr_1.5   
 [9] evaluate_0.10.1 stringi_1.1.5   rmarkdown_1.6   tools_3.4.2    
[13] stringr_1.2.0   htmlwidgets_0.9 httpuv_1.3.5    yaml_2.1.14    
[17] compiler_3.4.2  htmltools_0.3.6 knitr_1.17     

$`Matrix of unique X levels `
  smoke
1     1
2     2

$`Design matrix`
  (Intercept) smoke2
1           1      0
2           1      1
attr(,"assign")
[1] 0 1
attr(,"contrasts")
attr(,"contrasts")$smoke
[1] "contr.treatment"


$model_formula
[1] "logit [ p ( Y 1  >  Y 2 ) ] \n\n"

$input_covariates
[1] "smoke"

$input_response
[1] "y"
```

### Result of sAUC Regression with two discrete covariates


```r
result_two
```

```
$`Model summary`
            Coefficients Std. Error    2.5%   97.5% Pr(>|z|)
(Intercept)      -1.0657     0.4326 -1.9136 -0.2177   0.0138
smoke2            0.7434     0.3685  0.0212  1.4656   0.0436
vitamin2          0.2189     0.3379 -0.4435  0.8812   0.5172

$Coefficients
                  [,1]
(Intercept) -1.0656809
smoke2       0.7434195
vitamin2     0.2188638

$`AUC details`
     auchat    finvhat logitauchat v_finv_auchat var_logitauchat
1 0.0937500 -2.2686835  -2.2686835    0.69577034      0.69577034
2 0.4592934 -0.1631876  -0.1631876    0.09200219      0.09200219
3 0.3467078 -0.6335421  -0.6335421    0.12335006      0.12335006
4 0.4566667 -0.1737693  -0.1737693    0.04070024      0.04070024

$`Session information`
R version 3.4.2 (2017-09-28)
Platform: x86_64-w64-mingw32/x64 (64-bit)
Running under: Windows 7 x64 (build 7601) Service Pack 1

Matrix products: default

locale:
[1] LC_COLLATE=English_United States.1252 
[2] LC_CTYPE=English_United States.1252   
[3] LC_MONETARY=English_United States.1252
[4] LC_NUMERIC=C                          
[5] LC_TIME=English_United States.1252    

attached base packages:
[1] stats     graphics  grDevices utils     datasets  methods   base     

other attached packages:
[1] shiny_1.0.5  DT_0.2       sAUC_0.0.1.9

loaded via a namespace (and not attached):
 [1] Rcpp_0.12.13    digest_0.6.12   rprojroot_1.2   mime_0.5       
 [5] R6_2.2.2        xtable_1.8-2    backports_1.1.1 magrittr_1.5   
 [9] evaluate_0.10.1 stringi_1.1.5   rmarkdown_1.6   tools_3.4.2    
[13] stringr_1.2.0   htmlwidgets_0.9 httpuv_1.3.5    yaml_2.1.14    
[17] compiler_3.4.2  htmltools_0.3.6 knitr_1.17     

$`Matrix of unique X levels `
  smoke vitamin
1     1       1
2     2       1
3     1       2
4     2       2

$`Design matrix`
  (Intercept) smoke2 vitamin2
1           1      0        0
2           1      1        0
3           1      0        1
4           1      1        1
attr(,"assign")
[1] 0 1 2
attr(,"contrasts")
attr(,"contrasts")$smoke
[1] "contr.treatment"

attr(,"contrasts")$vitamin
[1] "contr.treatment"


$model_formula
[1] "logit [ p ( Y 1  >  Y 2 ) ] \n\n"

$input_covariates
[1] "smoke"   "vitamin"

$input_response
[1] "y"
```



