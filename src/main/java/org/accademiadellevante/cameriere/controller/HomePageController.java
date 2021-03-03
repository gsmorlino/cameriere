package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping(path = "/")
public class HomePageController {
    @Autowired
    TavoloRepository tavoloRepository;
    @GetMapping
    public String getHome()
    {
        return "index";
    }
    @GetMapping(path = "/tavoli")
    public String getTavoli(Model model){
        List<Tavolo> all = tavoloRepository.findAll();
        //all.get(0).occupato=false;
        model.addAttribute("numeroTavoli", tavoloRepository.count());
        model.addAttribute( "tavoli", all);
        return "tavoli";
    }
}
