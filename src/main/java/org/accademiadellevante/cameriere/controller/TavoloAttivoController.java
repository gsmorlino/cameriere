package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.model.TavoloAttivo;
import org.accademiadellevante.cameriere.repository.TavoloAttivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/tavoliattivi")
public class TavoloAttivoController {
    @Autowired
    TavoloAttivoRepository tavoloAttivoRepository;

    @GetMapping
    public List<TavoloAttivo> getTavoloAttivi(){
        return tavoloAttivoRepository.findAll();
    }
}
