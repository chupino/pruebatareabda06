db.empleados.aggregate([
    {
      $group: {
        _id: "$departamento",
        total_sueldo: { $sum: "$sueldo" }
      }
    }
  ])