package com.github.mgurov.jhipsterpgrnd.web.rest.mapper;

import com.github.mgurov.jhipsterpgrnd.domain.*;
import com.github.mgurov.jhipsterpgrnd.web.rest.dto.AuthorDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Author and its DTO AuthorDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface AuthorMapper {

    AuthorDTO authorToAuthorDTO(Author author);

    List<AuthorDTO> authorsToAuthorDTOs(List<Author> authors);

    Author authorDTOToAuthor(AuthorDTO authorDTO);

    List<Author> authorDTOsToAuthors(List<AuthorDTO> authorDTOs);
}
