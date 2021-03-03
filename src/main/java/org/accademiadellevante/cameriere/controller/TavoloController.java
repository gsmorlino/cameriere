package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.persistence.Id;

@Controller
@RequestMapping(path = "/tavoloselezionato")
public class TavoloController {
    @Autowired
    TavoloRepository tavoloRepository;

    @GetMapping
    public String getTavolo(@RequestParam int Id, Model model){
        model.addAttribute("Id", Id);
        return "tavoloselezionato";
    }
}
