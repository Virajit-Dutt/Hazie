import pandas as pd
import re
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

browser = webdriver.Chrome("chromedriver.exe")
browser.get("https://www.linkedin.com/jobs/")

job = browser.find_element_by_class_name("job-card-square__title")
c=[]
for i in job:
    c.append(i.text)
print(c)
print() 
print(len(c))

job_title = []
for i  in range(len(c)):
    job_title.append(c[i].strip("Job Title\n"))
    job_title

print(job_title)

job2 = browser.find_element_by_class_name("job-card-container__company-name")
comp_name = []
for i in job2:
    comp_name.append(i.text)
print(comp_name)
print()
print(len(comp_name))

job3 = browser.find_element_by_class_name("job-card-container__metadata-item")
loc_name = []
for i in job3:
    loc_name.append(i.text)
print(loc_name)
print()
print(len(loc_name))

comp_name.append(" ")
comp_name.append(" ")

len(comp_name)

col = ["Company Name", "Job Title", "Location"]
df = pd.DataFrame({"Company Name":comp_name,"Job Title":job_title,"Location":loc_name})

df.head()

df.to_csv("linkedin_scapejobs.csv")