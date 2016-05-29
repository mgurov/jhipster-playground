package com.github.mgurov.jhipsterpgrnd.repository;

import com.github.mgurov.jhipsterpgrnd.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
