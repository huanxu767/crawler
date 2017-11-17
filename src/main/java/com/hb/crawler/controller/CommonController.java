package com.hb.crawler.controller;

import com.hb.crawler.util.JsBrowserCache;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * 通用
 */
@Controller
public class CommonController {

    /**
     *
     * @return
     */
    @RequestMapping(value = "/countWebClient")
    public int countWebClient() {
        return JsBrowserCache.countWebClient();
    }

}
