package org.accademiadellevante.cameriere.controller;


import org.accademiadellevante.cameriere.model.Ordine;
import org.accademiadellevante.cameriere.model.Servizio;
import org.accademiadellevante.cameriere.repository.OrdineRepository;
import org.accademiadellevante.cameriere.repository.ServizioRepository;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.List;

@Controller
@RequestMapping(path = "/", method = RequestMethod.GET)
public class HomePageController {
    @Autowired
    TavoloRepository tavoloRepository;
    @Autowired
    ServizioRepository servizioRepository;
    @Autowired
    OrdineRepository ordineRepository;

    @GetMapping
    public String getHome()
    {
        return "index";
    }


    @GetMapping(path = "/scontrino")
    public String getScontrino(@RequestParam int id, Model model)
    {
        //List<Ordine> ordini = ordineRepository
        return "scontrino";
    }

    @GetMapping(path = "/salaEsterna")
    public String getSalaEsterna()
    {
        return "sala_esterna";
    }

}
