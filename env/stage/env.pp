class {'postgresql':
}

postgresql::role { "contact_django_stage":
    ensure    => present,
    password  => "hQStFk3PWMLAC7Kf",
    require => Class["postgresql"]
}

postgresql::database { "contact_django_stage":
    ensure => present,
    owner => "contact_django_stage",
    require => [Postgresql::Role["contact_django_stage"]]
}

class {'rabbitmq':
}

rabbitmq::vhost { 'contact_django_stage_vhost':
  ensure => present,
}

rabbitmq::user { 'contact_django_stage':
  ensure   => present,
  password => "test",
  user_tag => management,
}

rabbitmq::permissions { 'contact_django_stage@contact_django_stage_vhost':
  user  => 'contact_django_stage',
  vhost => 'contact_django_stage_vhost',
  conf  => '.*',
  write => '.*',
  read  => '.*',
}

rabbitmq::user { 'guest':
	ensure => absent,
}