package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.repository.TavoloAttivoRepository;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Id;
import java.util.List;

@RestController
@RequestMapping(path = "/listatavoli")
public class TavoloController {
    @Autowired
    TavoloRepository tavoloRepository;

    @GetMapping
    public List<Tavolo> getTavolo(){
        return tavoloRepository.findAll();
    }


}
