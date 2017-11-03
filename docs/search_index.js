var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Introduction",
    "title": "Introduction",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Semi-parametric-Area-Under-the-Curve-(sAUC)-Regression-1",
    "page": "Introduction",
    "title": "Semi-parametric Area Under the Curve (sAUC) Regression",
    "category": "section",
    "text": "Perform AUC analyses with discrete covariates and a semi-parametric estimation"
},

{
    "location": "index.html#What-is-sAUC-model-and-why?-1",
    "page": "Introduction",
    "title": "What is sAUC model and why?",
    "category": "section",
    "text": "In many applications, comparing two groups while adjusting for multiple covariates is desired for the statistical analysis.  For instance, in clinical trials, adjusting for covariates is a necessary aspect of the statistical analysis in order to improve the precision of the treatment comparison and to assess effect modification. sAUC is a semi-parametric AUC regression model to compare the effect of two treatment groups in the intended non-normal outcome while adjusting for discrete covariates. More detailed reasons on what it is and why it is proposed are outlined in this paper. A major reason behind the development of this method is that this method is computationally simple and is based on closed-form parameter and standard error estimation."
},

{
    "location": "index.html#Model-1",
    "page": "Introduction",
    "title": "Model",
    "category": "section",
    "text": "We consider applications that compare a response variable y between two groups (A and B) while adjusting for k categorical covariates X_1X_2X_k.  The response variable y is a continuous or ordinal variable that is not normally distributed.  Without loss of generality, we assume each covariate is coded such that X_i=1n_i,for i=1k. For each combination of the levels of the covariates, we define the Area Under the ROC curve (AUC) in the following way:pi_x_1 x_2x_k=P(Y^AY^BX_1=x_1X_2=x_2X_k=x_k )+frac12 P(Y^A=Y^BX_1=x_1X_2=x_2X_k=x_k )where x_1=1n_1x_k=1n_k, and Y^A and Y^B are two randomly chosen observations from Group A and B, respectively.  The second term in the above equation is for the purpose of accounting ties.For each covariate X_i, without loss of generality, we use the last category as the reference category and define (n_i-1) dummy variables X_i^(1)X_i^(2)X_i^(n_i-1) such thatX_i^(j) (x)= leftbeginarray
},

{
    "location": "index.html#Estimation-1",
    "page": "Introduction",
    "title": "Estimation",
    "category": "section",
    "text": "First, we denote the number of observations with covariates X_1=i_1X_k=i_k in groups A and B by N_i_1i_k^A and N_i_1i_k^B, respectively.  We assume both N_i_1i_k^A and N_i_1i_k^B are greater than zero in the following development.  An unbiased estimator of pi_i_1i_k proposed by Mann and Whitney (1947) ishatpi_i_1i_k=fracsum_l=1^N_i_1i_k^A sum_j=1^N_i_1i_k^B I_ljN_i_1i_k^A N_i_1i_k^BwhereI_i_1 i_k lj= leftbeginarray
},

{
    "location": "install.html#",
    "page": "Installation",
    "title": "Installation",
    "category": "page",
    "text": "InstallationHere is the GitHub repository for SemiparametricAUC.jlYou can install SemiparametricAUC.jl via GitHubgit clone https://github.com/sbohora/SemiparametricAUC.jl.gitThe following installation method is not currently available.Pkg.add(\"SemiparametricAUC\") "
},

{
    "location": "paper.html#",
    "page": "Article",
    "title": "Article",
    "category": "page",
    "text": "Below is the link to our paper published in the Journal of Data Science in 2017.Paper published in the Journal of Data Science"
},

{
    "location": "example-julia.html#",
    "page": "Example",
    "title": "Example",
    "category": "page",
    "text": ""
},

{
    "location": "example-julia.html#Warning:-This-package-is-still-under-development.-1",
    "page": "Example",
    "title": "Warning: This package is still under development.",
    "category": "section",
    "text": ""
},

{
    "location": "example-julia.html#sAUC-in-Julia-(SemiparametricAUC.jl)-1",
    "page": "Example",
    "title": "sAUC in Julia (SemiparametricAUC.jl)",
    "category": "section",
    "text": ""
},

{
    "location": "example-julia.html#Perform-AUC-analyses-with-discrete-covariates-and-a-semi-parametric-estimation-1",
    "page": "Example",
    "title": "Perform AUC analyses with discrete covariates and a semi-parametric estimation",
    "category": "section",
    "text": ""
},

{
    "location": "example-julia.html#Example-1",
    "page": "Example",
    "title": "Example",
    "category": "section",
    "text": "To illustrate how to apply the proposed method, we obtained data from a randomized and controlled clinical trial, which was designed to increase knowledge and awareness to prevent Fetal Alcohol Spectrum Disorders (FASD) in children through the development of printed materials targeting women of childbearing age in Russia. One of the study objectives was to evaluate effects of FASD education brochures with different types of information and visual images on FASD related knowledge, attitudes, and alcohol consumption on childbearing-aged women. The study was conducted in two regions in Russia including St. Petersburg (SPB) and the Nizhny Novgorod Region (NNR) from 2005 to 2008. A total of 458 women were recruited from women's clinics and were randomly assigned to one of three groups (defined by the GROUP variable): (1) a printed FASD prevention brochure with positive images and information stated in a positive way, positive group (PG), (2) a FASD education brochure with negative messages and vivid images, negative group (NG); and (3) a general health material, control group (CG). For the purpose of the analysis in this thesis, only women in the PG and CG were included. Data were obtained from the study principal investigators . The response variable was the change in the number of drinks per day (CHANGE_DRINK=number of drinks after-number of drinks before) on average in the last 30 days from one-month follow-up to baseline. Two covariates considered for the proposed method were \"In the last 30 days, have you smoked cigarettes?\" (SMOKE) and  \"In the last 30 days, did you take any other vitamins?\" (OVITAMIN). Both covariates had \"Yes\" or \"No\" as the two levels. The question of interest here was to assess the joint predictive effects of SMOKE and OVITAMIN on whether the participants reduced the number of drinks per day from baseline to one month follow-up period. A total of 210 women with no missing data on any of the CHANGE_DRINK, SMOKE, GROUP, and OVITAMIN were included in the analysis.The response variable CHANGE_DRINK was heavily skewed and not normally distributed in each group  (Shapiro-Wilk p<0.001). Therefore, we decided to use the AUG regression model to analyze the data.  In the AUG regression model we definelarge pi = p(Y_CG  Y_PG)Note that the value of large pi greater than .5 means that women in the PG had a greater reduction of alcohol drinks than those in the CG. For statistical results, all p-values < .05 were considered statistically significant and 95% CIs were presented.We first fit an AUC regression model including both main effects of the covariates.  Note that the main effects of the covariates in fact represented their interactions with the GROUP variable, which is different than the linear or generalized linear model frame.  The reason is that the GROUP variable is involved in defining the AUC.  Tables below present the parameter estimates, SEs, p-values, and 95% CIs for model with one and two covariates.  Because parameter beta_2 was not significantly different from 0, we dropped OVITAMIN and fit another model including only the SMOKE main effect.Table below shows a significant interaction between SMOKE and GROUP because the SMOKE was statistically significant (95% CI: (0.05, 1.47)). Therefore, the final model was logit(hatpi_Smoke) = hatbeta_0 + hatbeta_1*I(Smoke =Yes)Because the interaction between SMOKE and GROUP was significant, we need to use AUC as a measure of the GROUP effect on CHANGE_DRINK for smokers and non-smokers separately using following formula for example for smokers;hatpi_Smoke = frace^hatbeta_0 + hatbeta_1*Smoke =Yes1 + e^hatbeta_0 + hatbeta_1*Smoke =YesSpecifically, the AUCs were 0.537 (insignificant) and 0.713 (significant) for non-smokers and smokers, respectively.  This implies that the effect of positive and control brochures were similar for nonsmokers; however, for smokers, the probability that the positive brochure had a better effect than the control brochure in terms of alcohol reduction is 71.30%, indicating the positive brochure is a better option than the control brochure."
},

{
    "location": "example-julia.html#Result-of-sAUC-Regression-with-one-discrete-covariate-1",
    "page": "Example",
    "title": "Result of sAUC Regression with one discrete covariate",
    "category": "section",
    "text": "using DataFrames
},

{
    "location": "example-julia.html#Model-Summary:-one-discrete-covariate-1",
    "page": "Example",
    "title": "Model Summary: one discrete covariate",
    "category": "section",
    "text": "Predictors Estimate 2.5% 97.5% Std. Error t p\n(Intercept) -0.1432 -0.471359 0.185059 0.1675 -0.8548 0.392634\nx1: 1 -0.7668 -1.47803 -0.0555374 0.3629 -2.113 0.0346002"
},

{
    "location": "example-julia.html#Result-of-sAUC-Regression-with-two-discrete-covariates-1",
    "page": "Example",
    "title": "Result of sAUC Regression with two discrete covariates",
    "category": "section",
    "text": "two_covariates_results = SemiparametricAUC.semiparametricAUC(model_formula = y ~ x1 + x2, treatment_group = :group, data = fasd)
},

{
    "location": "example-julia.html#Model-Summary:-two-discrete-covariates-1",
    "page": "Example",
    "title": "Model Summary: two discrete covariates",
    "category": "section",
    "text": "Predictors Estimate 2.5% 97.5% Std. Error t p\n(Intercept) -0.1034 -0.49026 0.283465 0.1974 -0.5238 0.600387\nx1: 1 -0.2189 -0.881207 0.44348 0.3379 -0.6476 0.517213\nx2: 1 -0.7434 -1.46562 -0.021217 0.3685 -2.0175 0.0436388"
},

{
    "location": "command.html#",
    "page": "References",
    "title": "References",
    "category": "page",
    "text": "CurrentModule = SemiparametricAUC"
},

{
    "location": "command.html#SemiparametricAUC.calculate_auc-Tuple{Any,Any}",
    "page": "References",
    "title": "SemiparametricAUC.calculate_auc",
    "category": "Method",
    "text": "calculate_auc(ya, yb)\n\n\"Calcualtes AUC related estimates\"\n\nThis function takes two DataArray arguments ya and yb and calculates variance of predicted AUC,   logit of predicted AUC, and variance of logit of predicted AUC responses passed.\n\n\n\n"
},

{
    "location": "command.html#SemiparametricAUC.semiparametricAUC-Tuple{Any,Any,Any}",
    "page": "References",
    "title": "SemiparametricAUC.semiparametricAUC",
    "category": "Method",
    "text": "semiparametricAUC(model_formula, treatment_group, data)\n\nThis function is used to fit semiparametric AUC regression model specified by   giving a formula object of response and covariates and a separate argument of treatment   group. It will convert variables other than response into factors, estimate model parameters,   and display results.\n\nThis function takes a formula object model_formula with response and covariates such as {response ~ x1 + x2},   group argument treatment_group, which is treatment group for which a comparision is to be made, and    a data argument data which is a DataFrame object that contains variables needed for the analysis.\n\n\n\n"
},

{
    "location": "command.html#SemiparametricAUC.calculate_auc_simulation-Tuple{Any,Any}",
    "page": "References",
    "title": "SemiparametricAUC.calculate_auc_simulation",
    "category": "Method",
    "text": "calculate_auc_simulation(ya, yb)\n\nThis function takes two DataArray arguments ya and yb and calculates variance of predicted AUC,   logit of predicted AUC, and variance of logit of predicted AUC responses passed.\n\n\n\n"
},

{
    "location": "command.html#SemiparametricAUC.simulate_one_predictor",
    "page": "References",
    "title": "SemiparametricAUC.simulate_one_predictor",
    "category": "Function",
    "text": "simulate_one_predictor(iter, m, p)\n\nIt asks for number of iterations iter to be run, number of observations m in treatment   and control groups p for the simulation of Semiparametric AUC regression adjusting for one discrete   covariate. In this simulation, true model parameters are as follows: β0 = 0.15, β1 = 0.50, β2 = 1.\n\n\n\n"
},

{
    "location": "command.html#SemiparametricAUC.coefs_table-Tuple{Any,Any,Any,Any,Any}",
    "page": "References",
    "title": "SemiparametricAUC.coefs_table",
    "category": "Method",
    "text": "coef_table(mf,lo, up, betass, std_errors)\n\nThis function takes a ModelFrame object mf, numeric arguments lo, up, betass estimates and std_errors (beta's   standard errors, returns a table with model estimates, 95% CI, and p-values.\n\n\n\n"
},

{
    "location": "command.html#SemiparametricAUC.jl-Commands-1",
    "page": "References",
    "title": "SemiparametricAUC.jl Commands",
    "category": "section",
    "text": "calculate_auc(ya, yb)semiparametricAUC(model_formula, treatment_group, data)calculate_auc_simulation(ya, yb)simulate_one_predictor(iter = 500, m = 100, p = 120)coefs_table(mf, lo, up, betass, std_errors)"
},

{
    "location": "code.html#",
    "page": "Code",
    "title": "Code",
    "category": "page",
    "text": ""
},

{
    "location": "code.html#SemiparametricAUC.jl-Code-1",
    "page": "Code",
    "title": "SemiparametricAUC.jl Code",
    "category": "section",
    "text": ""
},

{
    "location": "code.html#calculate_auc-1",
    "page": "Code",
    "title": "calculate_auc",
    "category": "section",
    "text": "\"\"\"
},

{
    "location": "code.html#Example-1",
    "page": "Code",
    "title": "Example",
    "category": "section",
    "text": "calculate_auc(ya = DataFrames.DataArray([2,3,4,5]), yb = DataFrames.DataArray([2,3,4,5]))"
},

{
    "location": "code.html#semiparametricAUC-1",
    "page": "Code",
    "title": "semiparametricAUC",
    "category": "section",
    "text": "\"\"\"
},

{
    "location": "code.html#Example-2",
    "page": "Code",
    "title": "Example",
    "category": "section",
    "text": "semiparametricAUC(model_formula = y ~ x1, treatment_group = :group, data = fasd)"
},

{
    "location": "code.html#calculate_auc_simulation-1",
    "page": "Code",
    "title": "calculate_auc_simulation",
    "category": "section",
    "text": "\"\"\"
},

{
    "location": "code.html#Example-3",
    "page": "Code",
    "title": "Example",
    "category": "section",
    "text": "calculate_auc_simulation(ya = DataFrames.DataArray([2,3,4,3]), yb = DataFrames.DataArray([3,2,1,3,4,3]))"
},

{
    "location": "code.html#simulate_one_predictor-1",
    "page": "Code",
    "title": "simulate_one_predictor",
    "category": "section",
    "text": "\"\"\"
},

{
    "location": "code.html#Example-4",
    "page": "Code",
    "title": "Example",
    "category": "section",
    "text": "simulate_one_predictor(iter = 500, m = 100, p = 120)import SemiparametricAUC: simulate_one_predictor
},

{
    "location": "example.html#",
    "page": "sAUC in R",
    "title": "sAUC in R",
    "category": "page",
    "text": "Please follow this link to R package site sAUC in R (sAUC)"
},

{
    "location": "example.html#Perform-AUC-analyses-with-discrete-covariates-and-a-semi-parametric-estimation-1",
    "page": "sAUC in R",
    "title": "Perform AUC analyses with discrete covariates and a semi-parametric estimation",
    "category": "section",
    "text": ""
},

{
    "location": "example.html#Installation-1",
    "page": "sAUC in R",
    "title": "Installation",
    "category": "section",
    "text": "devtools::install_github(\"sbohora/sAUC\")"
},

{
    "location": "example.html#Example-1",
    "page": "sAUC in R",
    "title": "Example",
    "category": "section",
    "text": "To illustrate how to apply the proposed method, we obtained data from a randomized and controlled clinical trial, which was designed to increase knowledge and awareness to prevent Fetal Alcohol Spectrum Disorders (FASD) in children through the development of printed materials targeting women of childbearing age in Russia. One of the study objectives was to evaluate effects of FASD education brochures with different types of information and visual images on FASD related knowledge, attitudes, and alcohol consumption on childbearing-aged women. The study was conducted in two regions in Russia including St. Petersburg (SPB) and the Nizhny Novgorod Region (NNR) from 2005 to 2008. A total of 458 women were recruited from women's clinics and were randomly assigned to one of three groups (defined by the GROUP variable): (1) a printed FASD prevention brochure with positive images and information stated in a positive way, positive group (PG), (2) a FASD education brochure with negative messages and vivid images, negative group (NG); and (3) a general health material, control group (CG). For the purpose of the analysis in this thesis, only women in the PG and CG were included. Data were obtained from the study principal investigators . The response variable was the change in the number of drinks per day (CHANGE_DRINK=number of drinks after-number of drinks before) on average in the last 30 days from one-month follow-up to baseline. Two covariates considered for the proposed method were \"In the last 30 days, have you smoked cigarettes?\" (SMOKE) and  \"In the last 30 days, did you take any other vitamins?\" (OVITAMIN). Both covariates had \"Yes\" or \"No\" as the two levels. The question of interest here was to assess the joint predictive effects of SMOKE and OVITAMIN on whether the participants reduced the number of drinks per day from baseline to one month follow-up period. A total of 210 women with no missing data on any of the CHANGE_DRINK, SMOKE, GROUP, and OVITAMIN were included in the analysis.The response variable CHANGE_DRINK was heavily skewed and not normally distributed in each group  (Shapiro-Wilk p<0.001). Therefore, we decided to use the AUG regression model to analyze the data.  In the AUG regression model we definelarge pi = p(Y_CG  Y_PG)Note that the value of large pi greater than .5 means that women in the PG had a greater reduction of alcohol drinks than those in the CG. For statistical results, all p-values < .05 were considered statistically significant and 95% CIs were presented.We first fit an AUC regression model including both main effects of the covariates.  Note that the main effects of the covariates in fact represented their interactions with the GROUP variable, which is different than the linear or generalized linear model frame.  The reason is that the GROUP variable is involved in defining the AUC.  Tables below present the parameter estimates, SEs, p-values, and 95% CIs for model with one and two covariates.  Because parameter beta_2 was not significantly different from 0, we dropped OVITAMIN and fit another model including only the SMOKE main effect.Table below shows a significant interaction between SMOKE and GROUP because the SMOKE was statistically significant (95% CI: (0.05, 1.47)). Therefore, the final model was logit(hatpi_Smoke) = hatbeta_0 + hatbeta_1*I(Smoke =Yes)Because the interaction between SMOKE and GROUP was significant, we need to use AUC as a measure of the GROUP effect on CHANGE_DRINK for smokers and non-smokers separately using following formula for example for smokers;hatpi_Smoke = frace^hatbeta_0 + hatbeta_1*Smoke =Yes1 + e^hatbeta_0 + hatbeta_1*Smoke =YesSpecifically, the AUCs were 0.537 (insignificant) and 0.713 (significant) for non-smokers and smokers, respectively.  This implies that the effect of positive and control brochures were similar for nonsmokers; however, for smokers, the probability that the positive brochure had a better effect than the control brochure in terms of alcohol reduction is 71.30%, indicating the positive brochure is a better option than the control brochure."
},

{
    "location": "example.html#Result-of-sAUC-Regression-with-one-discrete-covariate-1",
    "page": "sAUC in R",
    "title": "Result of sAUC Regression with one discrete covariate",
    "category": "section",
    "text": "library(sAUC)
},

{
    "location": "example.html#Result-of-sAUC-Regression-with-two-discrete-covariates-1",
    "page": "sAUC in R",
    "title": "Result of sAUC Regression with two discrete covariates",
    "category": "section",
    "text": "result_two$`Model summary`
},

{
    "location": "r-shiny.html#",
    "page": "sAUC in R Shiny",
    "title": "sAUC in R Shiny",
    "category": "page",
    "text": "Below is the link to R Shiny application for the proposed method deployed using shinyapps.io by Rstudio .R Shiny Application"
},

{
    "location": "example-python.html#",
    "page": "saucpy in Python",
    "title": "saucpy in Python",
    "category": "page",
    "text": "Please follow this link to Python package site sAUC in Python"
},

{
    "location": "example-python.html#Perform-AUC-analyses-with-discrete-covariates-and-a-semi-parametric-estimation-1",
    "page": "saucpy in Python",
    "title": "Perform AUC analyses with discrete covariates and a semi-parametric estimation",
    "category": "section",
    "text": ""
},

{
    "location": "example-python.html#Installation-1",
    "page": "saucpy in Python",
    "title": "Installation",
    "category": "section",
    "text": "You can install saucpy via GitHub$ git clone https://github.com/sbohora/saucpy.gitThe following installation method is not currently available.$ pip install saucpy"
},

{
    "location": "example-python.html#Example-1",
    "page": "saucpy in Python",
    "title": "Example",
    "category": "section",
    "text": "To illustrate how to apply the proposed method, we obtained data from a randomized and controlled clinical trial, which was designed to increase knowledge and awareness to prevent Fetal Alcohol Spectrum Disorders (FASD) in children through the development of printed materials targeting women of childbearing age in Russia. One of the study objectives was to evaluate effects of FASD education brochures with different types of information and visual images on FASD related knowledge, attitudes, and alcohol consumption on childbearing-aged women. The study was conducted in two regions in Russia including St. Petersburg (SPB) and the Nizhny Novgorod Region (NNR) from 2005 to 2008. A total of 458 women were recruited from women's clinics and were randomly assigned to one of three groups (defined by the GROUP variable): (1) a printed FASD prevention brochure with positive images and information stated in a positive way, positive group (PG), (2) a FASD education brochure with negative messages and vivid images, negative group (NG); and (3) a general health material, control group (CG). For the purpose of the analysis in this thesis, only women in the PG and CG were included. Data were obtained from the study principal investigators . The response variable was the change in the number of drinks per day (CHANGE_DRINK=number of drinks after-number of drinks before) on average in the last 30 days from one-month follow-up to baseline. Two covariates considered for the proposed method were \"In the last 30 days, have you smoked cigarettes?\" (SMOKE) and  \"In the last 30 days, did you take any other vitamins?\" (OVITAMIN). Both covariates had \"Yes\" or \"No\" as the two levels. The question of interest here was to assess the joint predictive effects of SMOKE and OVITAMIN on whether the participants reduced the number of drinks per day from baseline to one month follow-up period. A total of 210 women with no missing data on any of the CHANGE_DRINK, SMOKE, GROUP, and OVITAMIN were included in the analysis.The response variable CHANGE_DRINK was heavily skewed and not normally distributed in each group  (Shapiro-Wilk p<0.001). Therefore, we decided to use the AUG regression model to analyze the data.  In the AUG regression model we definelarge pi = p(Y_CG  Y_PG)Note that the value of large pi greater than .5 means that women in the PG had a greater reduction of alcohol drinks than those in the CG. For statistical results, all p-values < .05 were considered statistically significant and 95% CIs were presented.We first fit an AUC regression model including both main effects of the covariates.  Note that the main effects of the covariates in fact represented their interactions with the GROUP variable, which is different than the linear or generalized linear model frame.  The reason is that the GROUP variable is involved in defining the AUC.  Tables below present the parameter estimates, SEs, p-values, and 95% CIs for model with one and two covariates.  Because parameter beta_2 was not significantly different from 0, we dropped OVITAMIN and fit another model including only the SMOKE main effect.Table below shows a significant interaction between SMOKE and GROUP because the SMOKE was statistically significant (95% CI: (0.06, 1.47)). Therefore, the final model waslogit(hatpi_Smoke) = hatbeta_0 + hatbeta_1*I(Smoke =Yes)Because the interaction between SMOKE and GROUP was significant, we need to use AUC as a measure of the GROUP effect on CHANGE_DRINK for smokers and non-smokers separately using following formula for example for smokers;hatpi_Smoke = frace^hatbeta_0 + hatbeta_1*Smoke =Yes1 + e^hatbeta_0 + hatbeta_1*Smoke =YesSpecifically, the AUCs were 0.537 (insignificant) and 0.713 (significant) for non-smokers and smokers, respectively.  This implies that the effect of positive and control brochures were similar for nonsmokers; however, for smokers, the probability that the positive brochure had a better effect than the control brochure in terms of alcohol reduction is 71.30%, indicating the positive brochure is a better option than the control brochure."
},

{
    "location": "example-python.html#Result-of-sAUC-Regression-with-one-discrete-covariate-1",
    "page": "saucpy in Python",
    "title": "Result of sAUC Regression with one discrete covariate",
    "category": "section",
    "text": "from pandas import read_csv
},

{
    "location": "example-python.html#Model-Summary:-one-predictor-1",
    "page": "saucpy in Python",
    "title": "Model Summary: one predictor",
    "category": "section",
    "text": "Predictors Coefficients Std. Error 2.5% 97.5% p\nIntercept -0.909936 0.315218 -1.527751 -0.292121 0.003893\nx1[T.2] 0.766786 0.356420 0.068216 1.465356 0.031448"
},

{
    "location": "example-python.html#Result-of-sAUC-Regression-with-two-discrete-covariates-1",
    "page": "saucpy in Python",
    "title": "Result of sAUC Regression with two discrete covariates",
    "category": "section",
    "text": "sAUC.semiparametricAUC(response = \"y\", treatment_group = [\"group\"], input_covariates = [\"x1\",\"x2\"], data = fasd)"
},

{
    "location": "example-python.html#Model-Summary-:-two-predictors-1",
    "page": "saucpy in Python",
    "title": "Model Summary : two predictors",
    "category": "section",
    "text": "Predictors Coefficients Std. Error 2.5% 97.5% p\nIntercept -1.125352 0.412748 -1.934324 -0.316380 0.006401\nx1[T.2] 0.781264 0.355340 0.084809 1.477718 0.027904\nx2[T.2] 0.252050 0.328229 -0.391267 0.895368 0.442541"
},

{
    "location": "bohora.html#",
    "page": "Developer",
    "title": "Developer",
    "category": "page",
    "text": "About meI am Som and am a Biostatistician at The Department of Pediatrics, The University of Oklahoma Health Sciences Center. I received my MApStat and MS in Biostatistics from LSU and OUHSC, respectively. In addition to BBMC, I work as a statistician and data programmer in a number of pediatric research projects. I was trained in biostatistics and epidemiology, and has research experience in Fetal Alcohol Spectrum Disorders (FASD), HIV/AIDS clinical trials and child maltreatment prevention. I am interested in the applications of statistical computing and simulation, data analytics, dynamic reporting, and real-time data decision making. I use mainly R, Python, and Julia programming languages. "
},

{
    "location": "bug-report.html#",
    "page": "Report Bugs",
    "title": "Report Bugs",
    "category": "page",
    "text": "Report any bugs and queries.You can report any bugs and queries about the package by creating an issue in GitHub package site or by emailing me at som-bohora@ouhsc.edu."
},

]}