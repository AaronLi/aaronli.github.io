from jinja2 import Environment, FileSystemLoader, select_autoescape
from json import load
import csv, os

template_env = Environment(
    loader= FileSystemLoader('.hidden/template'),
    autoescape=select_autoescape(),
    enable_async=True
)

template = template_env.get_template('drone_page.html')

with open('.hidden/data/drone_data.csv', encoding='utf8') as entries:
    entry_lines = csv.DictReader(entries)
    
    for entry in entry_lines:
        data_file_path = os.path.join(os.getcwd(), ".hidden", "data", "drones", entry['data_file'])
        output_path = os.path.join(os.getcwd(), "drones", entry['output_file'])
        with open(data_file_path, encoding='utf8') as data:
            template_values = load(data)
            with open(output_path, 'w', encoding='utf8') as output_file:
                output_file.write(template.render(template_values))