# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _

class Product(models.Model):
    _inherit = "product.product"