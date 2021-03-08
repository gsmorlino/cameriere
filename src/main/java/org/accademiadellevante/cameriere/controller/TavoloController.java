package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Ordine;
import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.model.TavoloAttivo;
import org.accademiadellevante.cameriere.repository.TavoloAttivoRepository;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping(path = "/tavoloselezionato")
public class TavoloController {
    @Autowired
    TavoloRepository tavoloRepository;
    TavoloAttivoRepository tavoloAttivoRepository;

    @GetMapping(path = "/ordinetavolo")
    public @ResponseBody List<Ordine> showOrdine(@RequestParam int id_tavolo){
        TavoloAttivo tavoloAttivo = (TavoloAttivo) tavoloAttivoRepository.findById(id_tavolo).get();
        return tavoloAttivo.servizio.ordini;



    }
}
