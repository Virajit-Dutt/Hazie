from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd

browser = webdriver.Chrome("chromedriver.exe")

url = 'https://www.google.com/search?q=google+jobs&oq=google+jobs&aqs=chrome..69i57.2624j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwj2h8v-ypb3AhXQ62EKHVKMA6kQutcGKAF6BAgWEBY#htivrt=jobs&htidocid=PLil6aUVWe0AAAAAAAAAAA%3D%3D&fpstate=tldetail'
query = 'Data Science'

browser.get(url)
time.sleep(2)

s1 = browser.find_element(by=By.XPATH,
                   value='/html/body/header/div[2]/div[2]/div/form/div[1]/div/div/div/div/div/input[1]')

print(s1.text)                   
time.sleep(1)

browser.find_element(by=By.XPATH,
                  value='/html/body/header/div[2]/div[2]/div/form/button[2]').click()
time.sleep(1)
s1 = browser.find_element(by=By.XPATH,
                       value='/html/body/header/div[2]/div[2]/div/form/div[1]/div/div/div/div/div/input[1]')
s1.click()
time.sleep(1)
s1.send_keys(query)
s1.send_keys(Keys.RETURN)

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

csvfile = df.to_csv("linkedin_scapejobs.csv")
print(csvfile)