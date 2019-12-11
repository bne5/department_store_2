100.times do
  department = Department.create(
    name: Faker::Games::Zelda.location
  )

  5.times do
    department.products.create(
      name: Faker::Games::Zelda.item,
      description: Faker::Lorem.sentences(number: 2),
      price: Faker::Number.decimal(l_digits: 2)
    )
  end
end

puts "seeded 100 departments"
puts "seeded 8 products for every department"