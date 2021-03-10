package org.accademiadellevante.cameriere.controller;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.model.TavoloAttivo;
import org.accademiadellevante.cameriere.repository.ServizioRepository;
import org.accademiadellevante.cameriere.repository.TavoloAttivoRepository;
import org.accademiadellevante.cameriere.repository.TavoloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
    public String getTavoliAttivi(Model model){
        List<Tavolo> all = tavoloRepository.findAll();
        //all.get(0).occupato=false;
        model.addAttribute("numeroTavoli", tavoloRepository.count());
        model.addAttribute( "tavoli", all);
        return "tavoliattiviJS";
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
    public @ResponseBody String addTavoliAttivi(@RequestParam int id_tavolo, @RequestParam int id_servizio){
        TavoloAttivo tavoloAttivo = new TavoloAttivo();
        tavoloAttivo.setId_tavolo(id_tavolo);
        tavoloAttivo.setId_servizio(id_servizio);
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
