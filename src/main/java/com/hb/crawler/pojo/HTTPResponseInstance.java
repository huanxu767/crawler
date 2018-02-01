package com.hb.crawler.pojo;

import org.apache.http.client.CookieStore;

public class HTTPResponseInstance {
    private String responseBody;
    private CookieStore cookieStore;

    public String getResponseBody() {
        return responseBody;
    }

    public void setResponseBody(String responseBody) {
        this.responseBody = responseBody;
    }

    public CookieStore getCookieStore() {
        return cookieStore;
    }

    public void setCookieStore(CookieStore cookieStore) {
        this.cookieStore = cookieStore;
    }
}
