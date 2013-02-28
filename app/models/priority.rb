# == Schema Information
#
# Table name: priorities
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  color      :string(255)      default("#ffffff")
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  value      :integer          default(1)
#

class Priority < ActiveRecord::Base
  attr_accessible :name, :color, :value
  belongs_to  :user, :inverse_of => :priorities #inverse is always the name of the class, either plural or singular
  has_many  :tasks, :inverse_of => :priority     #opposite of the symbol on the left
end
