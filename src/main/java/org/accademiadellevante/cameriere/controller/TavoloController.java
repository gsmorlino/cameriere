package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Servizio;
import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.model.TavoloAttivo;
import org.accademiadellevante.cameriere.repository.ServizioRepository;
import org.accademiadellevante.cameriere.repository.TavoloAttivoRepository;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;


@RestController
public class TavoloController {

    @Autowired
    TavoloRepository tavoloRepository;

    @Autowired
    TavoloAttivoRepository tavoloAttivoRepository;

    @Autowired
    ServizioRepository servizioRepository;


    @GetMapping(path = "/tavoli")
    public List<Tavolo> getTavoli(Model model){
        return tavoloRepository.findAll();
    }

    @GetMapping(path = "/tavoliattivi")
    public List<TavoloAttivo> getTavoliAttivi(Model model){
        return tavoloAttivoRepository.findAll();

    }

    @GetMapping(path = "/tavolisalainterna")
    public List<Tavolo> getTavoliSalaInterna(){
        List<Tavolo> salaInterna = tavoloRepository.getSalaInterna();
        return salaInterna;
    }

    @GetMapping(path = "/tavolisalaesterna")
    public List<Tavolo> getTavoliSalaEsterna(){
        List<Tavolo> salaEsterna = tavoloRepository.getSalaEsterna();
        return salaEsterna;
    }

    @PostMapping(path = "/inseriscitavoloattivo")
    public @ResponseBody String addTavoliAttivi(@RequestParam int id){
        TavoloAttivo tavoloAttivo = new TavoloAttivo();
        tavoloAttivo.setId_tavolo(id);
        Servizio servizio = new Servizio();
        servizioRepository.save(servizio);
        tavoloAttivo.setId_servizio(servizio.getId());
        tavoloAttivoRepository.save(tavoloAttivo);
        return "Tavolo registrato.";

    }

    @DeleteMapping(path = "/eliminatavoloattivo")
    public @ResponseBody String removeTavoliAttivi(@RequestParam int id_tavolo){
        /*TavoloAttivo tavoloAttivo = new TavoloAttivo();
        tavoloAttivo.setId_tavolo(id_tavolo);
        tavoloAttivo.setId_servizio(id_servizio);*/
        tavoloAttivoRepository.deleteById(id_tavolo);
        return "Tavolo eliminato.";
    }


}
