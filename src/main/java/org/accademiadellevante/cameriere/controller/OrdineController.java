package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Ordine;
import org.accademiadellevante.cameriere.repository.OrdineRepository;
import org.accademiadellevante.cameriere.repository.PiattoRepository;
import org.accademiadellevante.cameriere.repository.TavoloAttivoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class OrdineController {

    @Autowired
    OrdineRepository ordineRepository;

    @PostMapping(path = "/ordini")
    public @ResponseBody String addOrdine(@RequestParam int id, @RequestParam int id_servizio, @RequestParam int quantita){
        Ordine ordine = new Ordine();
        ordine.setQuantita(quantita);
        ordine.setId_piatto(id);
        ordine.setId_servizio(id_servizio);
        ordineRepository.save(ordine);
        return "Ordine registrato.";
    }

}
