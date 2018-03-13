25.times do
  Menu.create(
    item: Faker::Food.dish,
    description: Faker::Food.ingredient,
    price: Faker::Commerce.price.to_f
  )
end
puts "Seeded"
