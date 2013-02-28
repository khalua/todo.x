# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  description :text
#  duedate     :date
#  is_complete :boolean          default(FALSE)
#  priority_id :integer
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  attr_accessible :title, :description, :duedate, :is_complete
  belongs_to  :user, :inverse_of => :tasks
  belongs_to :priority, :inverse_of => :tasks
end
