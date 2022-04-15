from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

bot1 = webdriver.Chrome("D:\\Work\\C_Programs\\Python\\Drivers\\chromedriver.exe")

url = 'https://www.google.com/search?q=google+jobs&oq=google+jobs&aqs=chrome..69i57.2624j0j9&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwj2h8v-ypb3AhXQ62EKHVKMA6kQutcGKAF6BAgWEBY#htivrt=jobs&htidocid=PLil6aUVWe0AAAAAAAAAAA%3D%3D&fpstate=tldetail'
query = 'Data Science'

bot1.get(url)
time.sleep(2)

bot1.find_element(by=By.XPATH,
                   value='/html/body/header/div[2]/div[2]/div/form/div[1]/div/div/div/div/div/input[1]').click()
time.sleep(1)

bot1.find_element(by=By.XPATH,
                  value='/html/body/header/div[2]/div[2]/div/form/button[2]').click()
time.sleep(1)
s1 = bot1.find_element(by=By.XPATH,
                       value='/html/body/header/div[2]/div[2]/div/form/div[1]/div/div/div/div/div/input[1]')
s1.click()
time.sleep(1)
s1.send_keys(query)
s1.send_keys(Keys.RETURN)