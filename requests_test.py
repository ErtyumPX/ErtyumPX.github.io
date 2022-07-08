from bs4 import BeautifulSoup
import requests

test_url = "https://www.facebook.com/photo/?fbid=2241345032669963&set=a.266775293460290"
test_url_2 = "https://en.wikipedia.org/wiki/Main_Page"
tag = "mp-free"

def main():
    r = requests.get(test_url_2)
    if r.status_code != 200:
        raise Exception(f"Could not reached the site, code: {r.status_code} ")
    soup = BeautifulSoup(r.content, "html.parser")
    data_1 = soup.select_one(f"div[id^={tag}]")
    if data_1:
        print(data_1.text)



if __name__ == "__main__":
    main()


