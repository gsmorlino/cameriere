package org.accademiadellevante.cameriere.controller;


import org.accademiadellevante.cameriere.model.Ordine;
import org.accademiadellevante.cameriere.model.Servizio;
import org.accademiadellevante.cameriere.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@Controller
@RequestMapping(path = "/", method = RequestMethod.GET)
public class HomePageController {
    @Autowired
    TavoloRepository tavoloRepository;
    @Autowired
    TavoloAttivoRepository tavoloAttivoRepository;
    @Autowired
    ServizioRepository servizioRepository;
    @Autowired
    OrdineRepository ordineRepository;
    @Autowired
    PiattoRepository piattoRepository;

    @GetMapping
    public String getHome()
    {
        return "index";
    }


    @PostMapping(path = "/scontrino")
    public String getScontrino(@RequestParam int id, @RequestParam int id_tavolo, Model model)
    {
        Servizio servizio = servizioRepository.findById(id).get();
        List<Ordine> ordini = ordineRepository.findAllByServizio(servizio);

        tavoloAttivoRepository.deleteById(id_tavolo);

        model.addAttribute("data", servizio.getData());
        model.addAttribute("lista-ordini", ordini);
        model.addAttribute("id-tavolo", id_tavolo);
        model.addAttribute("piatti", piattoRepository.findAll());

        return "scontrino";
    }

    @GetMapping(path = "/salaEsterna")
    public String getSalaEsterna()
    {
        return "sala_esterna";
    }

}
