package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Piatto;
import org.accademiadellevante.cameriere.repository.PiattoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MenuController {

    @Autowired
    PiattoRepository piattoRepository;

    @GetMapping(path = "/menu")
    public @ResponseBody List<Piatto> showMenu(){
        return piattoRepository.findAll();

    }
    @GetMapping(path = "/antipasti")
    public @ResponseBody List<Piatto> showAntipasto(){
        return piattoRepository.getAntipasti();
    }

    @GetMapping(path = "/pizze")
    public @ResponseBody List<Piatto> showPizza(){
        return piattoRepository.getPizza();
    }

    @GetMapping(path = "/dolce")
    public @ResponseBody List<Piatto> showDolce(){
        return piattoRepository.getDolce();
    }

    @GetMapping(path = "/bevanda")
    public @ResponseBody List<Piatto> showBevanda(){
        return piattoRepository.getBevanda();
    }
}
