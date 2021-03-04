package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Cliente;
import org.accademiadellevante.cameriere.model.Tavolo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
