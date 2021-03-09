package org.accademiadellevante.cameriere.controller;


import org.accademiadellevante.cameriere.model.Cliente;
import org.accademiadellevante.cameriere.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ClienteController {

    @Autowired
    ClienteRepository clienteRepository;


    @PostMapping(path = "/clienti")
    public @ResponseBody String addClienti(@RequestParam String nome, @RequestParam String cognome, @RequestParam String cellulare, @RequestParam int id){
        Cliente cliente = new Cliente();
        cliente.setNome(nome);
        cliente.setCognome(cognome);
        cliente.setCellulare(cellulare);
        clienteRepository.save(cliente);

        return "Cliente Registrato nel Database.";

    }

    @GetMapping(path = "/clienti")
    public @ResponseBody Iterable<Cliente> getAllClienti(){
        return clienteRepository.findAll();
    }
}
