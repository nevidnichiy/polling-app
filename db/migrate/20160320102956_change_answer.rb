class ChangeAnswer < ActiveRecord::Migration
  def change
    rename_column :answers, :possible_question_id, :possible_answer_id
  end
end
