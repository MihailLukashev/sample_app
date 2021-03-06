module TodosHelper

  def wrapy(text)
    sanitize(raw(text.split.map{ |s| wrap_long_string(s) }.join(' ')))
  end

  private

  def wrapy_long_string(text, max_width = 30)
    zero_width_space = "&#8203;"
    regex = /.{1,#{max_width}}/
    (text.length < max_width) ? text :
        text.scan(regex).join(zero_width_space)
  end

end
