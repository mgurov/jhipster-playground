package com.github.mgurov.jhipsterpgrnd.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GenericService {
    private List<Object> auditTrail = new ArrayList<>();

    public <T> T add(T o) {
        auditTrail.add(o);
        return o;
    }

    public List<Object> list() {
        return auditTrail;
    }
}
