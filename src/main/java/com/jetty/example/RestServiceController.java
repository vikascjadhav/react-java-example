package com.jetty.example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.ArrayList;

@RestController
public class RestServiceController {

	@RequestMapping(value = "/testService", method = RequestMethod.GET,  produces = "application/json")
	public List<String> testService() {
		List<String> colorList = new ArrayList<String>();
		colorList.add("Green");
		colorList.add("Yellow");
		return colorList;
	}

}
