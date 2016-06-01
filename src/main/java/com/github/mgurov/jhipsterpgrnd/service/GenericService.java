package com.github.mgurov.jhipsterpgrnd.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GenericService <T> {
    private List<Object> auditTrail = new ArrayList<>();

    public T add(T o) {
        auditTrail.add(o);
        return o;
    }

    public List<Object> list() {
        return auditTrail;
    }
}
