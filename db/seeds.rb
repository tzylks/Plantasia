# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Plant.create(name: "Pothos", lighting: "Low", price: 23 , image: "https://images.unsplash.com/photo-1600411833114-bd695886396e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", height: 150)
Plant.create(name: "Fiddle Leaf Fig", lighting: "Medium", price: 20, image: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80", height: 90 )
Plant.create(name: "Swiss Cheese", lighting: "Low", price: 12, image: "https://images.unsplash.com/photo-1584089574597-25eee65da861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", height: 70)
Plant.create(name: "Snake", lighting: "Medium", price: 30, image: "https://images.unsplash.com/photo-1599009944997-3544a939813c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", height: 130)
Plant.create(name: "ZZ", lighting: "Medium", price: 12, image: "https://images.unsplash.com/photo-1597593873848-409a508574f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80", height: 110)
puts 'seeded plants'
Book.create(title: "Bauhaus", author: "Magdalena Droste", price: 18, image: 'https://images.pexels.com/photos/3747281/pexels-photo-3747281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
Book.create(title: "The Spirit of Bauhaus", author: "Anne Monier", price: 40, image: "https://images.pexels.com/photos/3746962/pexels-photo-3746962.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
Book.create(title: "The Orange Book", author: "Anonymous", price: 12,image: "https://images.pexels.com/photos/4866045/pexels-photo-4866045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
Book.create(title: "Yves Saint Laurent Accessories", author: "Patrick Mauriès", price: 14,image: "https://images.pexels.com/photos/3747396/pexels-photo-3747396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
Book.create(title: "The Sorrows of Young Werther", author: "Johann Wolfgang von Goethe", price: 32,image: "https://images.pexels.com/photos/6475044/pexels-photo-6475044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
puts 'seeded books'
Tool.create(name: 'Trowel', price: '18', image: 'https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
Tool.create(name: 'Shears', price: '12', image: 'https://images.pexels.com/photos/6231990/pexels-photo-6231990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
Tool.create(name: 'Miniature Tool Set', price: '30', image: 'https://images.pexels.com/photos/6231728/pexels-photo-6231728.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
Tool.create(name: 'Watering Pot', price: '29', image: 'https://images.pexels.com/photos/4503736/pexels-photo-4503736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
Tool.create(name: 'Step Ladder', price: '35', image: 'https://images.pexels.com/photos/8989419/pexels-photo-8989419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
puts 'seeded tools'