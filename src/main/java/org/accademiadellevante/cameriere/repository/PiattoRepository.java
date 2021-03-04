package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Cliente;
import org.accademiadellevante.cameriere.model.Piatto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PiattoRepository extends JpaRepository<Piatto, Integer> {
}
