update concept_numeric set units = '10^6/mm³' where concept_id in (select concept_id  from concept_name where name = 'Globules Rouges' and concept_name_type = 'FULLY_SPECIFIED' and locale='fr' and voided=0)