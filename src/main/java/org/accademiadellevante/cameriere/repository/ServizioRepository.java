package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Cliente;
import org.accademiadellevante.cameriere.model.Servizio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServizioRepository extends JpaRepository<Servizio, Integer> {
}
