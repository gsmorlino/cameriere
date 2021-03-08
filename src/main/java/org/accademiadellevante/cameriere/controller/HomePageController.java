package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequestMapping(path = "/", method = RequestMethod.GET)
public class HomePageController {
    @Autowired
    TavoloRepository tavoloRepository;
    @GetMapping
    public String getHome()
    {
        return "index";
    }

}
