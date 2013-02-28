User.delete_all
Priority.delete_all
Task.delete_all

u1 = User.create(:name => 'Tony Contreras', :email => 'tony.contreras@gmail.com', :password => 'abc', :password_confirmation => 'abc' )
u2 = User.create(:name => 'Aly Foley', :email => 'alyfc33@gmail.com', :password => 'abc', :password_confirmation => 'abc' )
u3 = User.create(:name => 'Lulu Contreras', :email => 'lulu@gmail.com', :password => 'abc', :password_confirmation => 'abc' )
u4 = User.create(:name => 'Olivia Contreras', :email => 'olivia@gmail.com', :password => 'abc', :password_confirmation => 'abc' )

p1 = Priority.create(:name => 'High', :color => '#ff0000', :value => 2 )
p2 = Priority.create(:name => 'Medium', :color => '#ff7f00', :value => 3 )
p3 = Priority.create(:name => 'Low', :color => '#00ff00', :value => 4 )
p4 = Priority.create(:name => 'Ultra!', :color => '#ff5d2c', :value => 1)

p5 = Priority.create(:name => 'High', :color => '#ff0000' )
p7 = Priority.create(:name => 'Low', :color => '#00ff00')

p8 = Priority.create(:name => 'Ultra!', :color => '#ff5d2c')

t1 = Task.create(:title => 'Learn Rails', :description => 'Because its awesome', :duedate => '2013/05/01' ) #tony u1 p1
t2 = Task.create(:title => 'Get Milk', :description => '2% or better', :is_complete => true, :duedate => '2013/03/01' ) #tony u1 p2
t3 = Task.create(:title => 'Make dinner reservations', :description => 'Bibsy in from out of town', :duedate => '2013/04/01' ) #aly u2 p3
t4 = Task.create(:title => 'Test Prep', :description => 'Math is awesome!', :duedate => '2013/03/15' ) #olivia u4 p4
t5 = Task.create(:title => 'Fix tutu', :description => 'My tutu as a rip, need to sew it',:is_complete => true, :duedate => '2013/03/07' )

t1.priority = p1
u1.tasks << t1
t1.save
t2.priority = p2
u1.tasks << t1
t2.save

t3.priority = p3

t3.save
t4.priority = p4
t4.save
t5.priority = p5
t5.save


u2.tasks << t3
u3.tasks << t5
u4.tasks << t4

u1.priorities = [p1,p2,p3,p4]