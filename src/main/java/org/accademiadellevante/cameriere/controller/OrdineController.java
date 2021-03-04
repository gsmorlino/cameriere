package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Ordine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class OrdineController {

    @Autowired
    OrdineRepository ordineRepository;

    @GetMapping(path = "/ordini")
    public @ResponseBody List<Ordine> addOrdine(){
        Ordine ordine = new Ordine();
        ordineRepository.save(ordine);

        return "Ordine registrato.";
    }
}
