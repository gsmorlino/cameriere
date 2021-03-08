package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class TavoloController {

    @Autowired
    TavoloRepository tavoloRepository;

    @GetMapping(path = "/tavoli")
    public List<Tavolo> getTavoli(Model model){
        return tavoloRepository.findAll();
    }

    @GetMapping(path = "/tavoliattivi")
    public String getTavoliAttivi(Model model){
        List<Tavolo> all = tavoloRepository.findAll();
        //all.get(0).occupato=false;
        model.addAttribute("numeroTavoli", tavoloRepository.count());
        model.addAttribute( "tavoli", all);
        return "tavoliattiviJS";
    }
}
