import pandas as pd
import re
import time
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

query = "Data Scientist"

browser = webdriver.Chrome("chromedriver.exe")
browser.get("https://www.linkedin.com/jobs/")
time.sleep(2)

s1 = browser.find_element(by=By.XPATH,
                          value='/html/body/main/section[1]/div/section/div[2]/section[2]/form/section[1]/input')

s1.click()
time.sleep(1)
s1.send_keys(query)
time.sleep(3)

browser.find_element(by=By.XPATH,
                     value='/html/body/main/section[2]').click()
time.sleep(1)

browser.find_element(by=By.XPATH,
                     value='/html/body/main/section[1]/div/section/div[2]/button[2]').click()
