package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Tavolo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TavoloRepository extends JpaRepository<Tavolo, Integer> {
}
