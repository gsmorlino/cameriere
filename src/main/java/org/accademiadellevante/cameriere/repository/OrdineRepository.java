package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Cliente;
import org.accademiadellevante.cameriere.model.Ordine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdineRepository extends JpaRepository<Ordine, Integer> {
}
