

export default class FotoService {

	constructor(resource) {
		this._resource = resource('v1/fotos{/id}');
	}

	listar() {
		return this._resource
					.query()
					.then( 
						res => res.json(),

						err => {
							console.log(err);
                        	throw new Error('Não foi possível obter as foto do servidor, tente mais tarde.');
						}
					);
	}

	cadastrar(foto) {

		// Atualizar
		if (foto._id) {
			return this._resource
				.update({ id: foto._id}, foto);

		// Cadastrar
		} else {
			return this._resource.save( foto );

		}

	}

	apagar(id) {

		// devovlve uma promise
		return this._resource
			.delete( {id} )
			.then( 
				null, 
				err =>  {
					console.log(err);
                	throw new Error('Não foi possível remover a foto.');
				}
			);

	}

	busca( id ) {
		return this._resource
			.get( { id } )
			.then( res => res.json() );
	}


	
}

// let service = new FotoService($this.$resource);