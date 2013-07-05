class {'postgresql':
}

postgresql::role { "contact_django_vagrant":
    ensure    => present,
    password  => "test",
    require => Class["postgresql"]
}

class {'postgis':
}

postgresql::database { "contact_django_vagrant":
    ensure => present,
    owner => "contact_django_vagrant",
    template_name => "template_postgis",
    require => [Exec["create_postgis_template"], Postgresql::Role["contact_django_vagrant"]]
}

class {'rabbitmq':
}

rabbitmq::vhost { 'contact_django_vagrant_vhost':
  ensure => present,
}

rabbitmq::user { 'contact_django_vagrant':
  ensure   => present,
  password => "test",
  user_tag => management,
}

rabbitmq::permissions { 'contact_django_vagrant@contact_django_vagrant_vhost':
  user  => 'contact_django_vagrant',
  vhost => 'contact_django_vagrant_vhost',
  conf  => '.*',
  write => '.*',
  read  => '.*',
}

rabbitmq::user { 'guest':
	ensure => absent,
}