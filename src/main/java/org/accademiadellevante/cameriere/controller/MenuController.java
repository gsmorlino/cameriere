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
}
