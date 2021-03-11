package org.accademiadellevante.cameriere.repository;

import org.accademiadellevante.cameriere.model.Servizio;
import org.accademiadellevante.cameriere.model.Tavolo;
import org.accademiadellevante.cameriere.model.TavoloAttivo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

public interface TavoloAttivoRepository extends JpaRepository<TavoloAttivo, Integer>  {
    TavoloAttivo getTavoloAttivoByServizio(Servizio servizio);
}
