SELECT c.weapon_id, c.name, GROUP_CONCAT(p.name SEPARATOR ', ') AS props
FROM weapons AS c
JOIN weapons_properties ON c.weapon_id=weapons_properties.weapon_id
JOIN properties AS p ON weapons_properties.properties_id=p.id
GROUP BY c.name;