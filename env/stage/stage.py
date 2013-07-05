# -*- coding: utf-8 -*-

from fabric.api import env
from deployit.fabrichelper.servicebase import UwsgiService, NginxService, NewReclicService
from deployit.fabrichelper.environments import EnvTask


class TestEnv(EnvTask):
    """
    Use stage environment
    """
    name = "stage"

    def run(self):
        env.hosts = ['contact.iterativ.ch']
        env.env_name = 'stage'
        env.services = [UwsgiService, NginxService]
        env.project_name = 'contact_django'
        env.server_names = ['contact.iterativ.ch']
        env.nginx_no_follow = True
        env.requirements_file = 'requirements/base.txt'
        env.settings_module = 'contact_django.settings.stage'
        env.puppet_branch_name = 'ubuntu1204'
        env.puppet_temp_dir = '/tmp/puppet/'
        env.puppet_dir = '/tmp/projects/'


test_env = TestEnv()