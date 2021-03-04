package org.accademiadellevante.cameriere.controller;


import org.accademiadellevante.cameriere.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ClienteController {

    @Autowired
    ClienteRepository clienteRepository;

    @GetMapping(path = "/clienti")
    public @ResponseBody String addClienti(@RequestParam String nome, @RequestParam String cognome, @RequestParam String cellulare){
        Cliente cliente = new Cliente();
        cliente.setNome(nome);
        cliente.setCognome(cognome);
        cliente.setCellulare(cellulare);
        clienteRepository.save(cliente);

        return "Cliente Registrato nel Database.";

    }

    @GetMapping(path = "/elencoclienti")
    public @ResponseBody Iterable<Cliente> getAllClienti(){
        return clienteRepository.findAll();
    }
}
